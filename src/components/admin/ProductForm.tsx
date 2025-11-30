import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { DBProduct, DBCategory, uploadProductImage, deleteProductImage } from '@/hooks/useProducts';
import { useToast } from '@/hooks/use-toast';
import { Upload, X, GripVertical, Loader2 } from 'lucide-react';

interface ProductFormProps {
  product?: DBProduct | null;
  categories: DBCategory[];
  onSubmit: (data: Partial<DBProduct>) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const ProductForm = ({ product, categories, onSubmit, onCancel, isLoading }: ProductFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    condition: 'New',
    items_per_pallet: '',
    category_id: '',
    main_image: '',
    gallery: [] as string[],
    order_link: '',
    is_active: true,
  });
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || '',
        description: product.description || '',
        price: product.price || '',
        condition: product.condition || 'New',
        items_per_pallet: product.items_per_pallet || '',
        category_id: product.category_id || '',
        main_image: product.main_image || '',
        gallery: product.gallery || [],
        order_link: product.order_link || '',
        is_active: product.is_active ?? true,
      });
    }
  }, [product]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, isMain: boolean) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    try {
      const uploadPromises = Array.from(files).map((file) => uploadProductImage(file));
      const urls = await Promise.all(uploadPromises);

      if (isMain) {
        setFormData((prev) => ({ ...prev, main_image: urls[0] }));
      } else {
        setFormData((prev) => ({ ...prev, gallery: [...prev.gallery, ...urls] }));
      }

      toast({
        title: 'Success',
        description: `${urls.length} image(s) uploaded successfully`,
      });
    } catch (error) {
      toast({
        title: 'Upload Failed',
        description: 'Failed to upload image(s)',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const removeImage = async (url: string, isMain: boolean) => {
    try {
      await deleteProductImage(url);
      if (isMain) {
        setFormData((prev) => ({ ...prev, main_image: '' }));
      } else {
        setFormData((prev) => ({
          ...prev,
          gallery: prev.gallery.filter((img) => img !== url),
        }));
      }
      toast({
        title: 'Image Removed',
        description: 'Image deleted successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete image',
        variant: 'destructive',
      });
    }
  };

  const reorderGallery = (fromIndex: number, toIndex: number) => {
    const newGallery = [...formData.gallery];
    const [removed] = newGallery.splice(fromIndex, 1);
    newGallery.splice(toIndex, 0, removed);
    setFormData((prev) => ({ ...prev, gallery: newGallery }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Product Name *</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Price *</Label>
          <Input
            id="price"
            value={formData.price}
            onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
            placeholder="$800"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select
            value={formData.category_id}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, category_id: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="condition">Condition</Label>
          <Select
            value={formData.condition}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, condition: value }))}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Grade A">Grade A</SelectItem>
              <SelectItem value="Grade B">Grade B</SelectItem>
              <SelectItem value="Mixed">Mixed</SelectItem>
              <SelectItem value="Refurbished">Refurbished</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="items_per_pallet">Items Per Pallet</Label>
          <Input
            id="items_per_pallet"
            value={formData.items_per_pallet}
            onChange={(e) => setFormData((prev) => ({ ...prev, items_per_pallet: e.target.value }))}
            placeholder="100-150"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="order_link">Order Link (WhatsApp)</Label>
          <Input
            id="order_link"
            value={formData.order_link}
            onChange={(e) => setFormData((prev) => ({ ...prev, order_link: e.target.value }))}
            placeholder="https://wa.me/1234567890"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
          rows={4}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="is_active"
          checked={formData.is_active}
          onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, is_active: checked }))}
        />
        <Label htmlFor="is_active">Active (visible on website)</Label>
      </div>

      {/* Main Image */}
      <div className="space-y-2">
        <Label>Main Image</Label>
        <div className="border-2 border-dashed border-border rounded-lg p-4">
          {formData.main_image ? (
            <div className="relative w-40 h-40">
              <img
                src={formData.main_image}
                alt="Main"
                className="w-full h-full object-cover rounded"
              />
              <button
                type="button"
                onClick={() => removeImage(formData.main_image, true)}
                className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center cursor-pointer py-8">
              <Upload className="h-8 w-8 text-muted-foreground mb-2" />
              <span className="text-sm text-muted-foreground">Click to upload main image</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, true)}
                className="hidden"
                disabled={uploading}
              />
            </label>
          )}
        </div>
      </div>

      {/* Gallery */}
      <div className="space-y-2">
        <Label>Gallery Images</Label>
        <div className="border-2 border-dashed border-border rounded-lg p-4">
          <div className="flex flex-wrap gap-4 mb-4">
            {formData.gallery.map((url, index) => (
              <div key={url} className="relative w-24 h-24 group">
                <img
                  src={url}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center gap-1">
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => reorderGallery(index, index - 1)}
                      className="p-1 bg-background rounded"
                    >
                      <GripVertical className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => removeImage(url, false)}
                    className="p-1 bg-destructive text-destructive-foreground rounded"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <span className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs text-center py-0.5 rounded-b">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
          <label className="flex items-center justify-center cursor-pointer py-4 border border-dashed border-border rounded hover:border-primary transition-colors">
            {uploading ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <>
                <Upload className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Add gallery images</span>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleImageUpload(e, false)}
              className="hidden"
              disabled={uploading}
            />
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading || uploading}>
          {isLoading ? 'Saving...' : product ? 'Update Product' : 'Create Product'}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
