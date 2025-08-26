using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using LearningApis.Entities.Models;
using Microsoft.Identity.Client;


namespace LearningApis.Data
{
    public class UserContext:DbContext
    {
        public UserContext(DbContextOptions<UserContext>options):base(options)
        {
            
        }
        public DbSet<User> Users { get; set; }
    }
}
