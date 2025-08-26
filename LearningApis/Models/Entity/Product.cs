namespace LearningApis.Entities.Models
{
    public class Product
    {
        public Guid ProductId { get; set; }
        public  required String  ProductName { get; set; }
        public required int ProductPrice { get; set; }

        public string? ProductDescription { get; set; }
        public string? ProductImageUrl { get; set; }







    }
}
