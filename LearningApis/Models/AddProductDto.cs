namespace LearningApis.Models
{
    public class AddProductDto
    {
        public required String ProductName { get; set; }
        public required int ProductPrice { get; set; }

        public string? ProductDescription { get; set; }
        public string? ProductImageUrl { get; set; }


    }
}
