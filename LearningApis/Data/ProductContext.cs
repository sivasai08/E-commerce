using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using LearningApis.Entities.Models;

namespace LearningApis.Data
{
    public class ProductContext:DbContext
    {
        public ProductContext(DbContextOptions<ProductContext>options):base(options)
        {
            
        }
         
        public DbSet<Product> Products { get; set; }
    }
}
