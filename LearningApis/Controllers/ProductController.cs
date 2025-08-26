using LearningApis.Data;
using LearningApis.Entities.Models;
using LearningApis.Models;
using Microsoft.AspNetCore.Mvc;

namespace LearningApis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController:ControllerBase
    {
        private readonly ProductContext dbContext;
        public ProductController(ProductContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(dbContext.Products.ToList());
        }

        [HttpPost]
        public IActionResult AddProducts(AddProductDto addProductDto)
        {
            var ProductEntity = new Product()
            {
                ProductName = addProductDto.ProductName,
                ProductPrice = addProductDto.ProductPrice,
                ProductDescription = addProductDto.ProductDescription,
                ProductImageUrl =addProductDto.ProductImageUrl
            };
            dbContext.Products.Add(ProductEntity);
            dbContext.SaveChanges();
            return Ok(ProductEntity);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(Guid id) 
        {
            var product = dbContext.Products.FirstOrDefault(p => p.ProductId == id);

            if (product == null)
            {
                return NotFound(new { message = "Product not found." });
            }

            dbContext.Products.Remove(product);
            dbContext.SaveChanges();

            return NoContent(); 
        }



    }
}
