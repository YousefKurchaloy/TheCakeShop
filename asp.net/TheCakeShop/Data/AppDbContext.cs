using Entities;
using Microsoft.EntityFrameworkCore;

namespace TheCakeShop.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<Order> Orders { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder
        //        .Entity<Customer>()
        //        .HasOne(e => e.Orders)
        //        .WithOne(e => e.CustomerId)
        //        .OnDelete(DeleteBehavior.ClientCascade);
        //}
    }
}
