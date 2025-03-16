using ProductService.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ProductService.Data{

public class ProductDbContext : DbContext
{
    public ProductDbContext(DbContextOptions<ProductDbContext> options) : base(options) { }

    public DbSet<Product> Products { get; set; }

   public static void SeedData(ProductDbContext context)
{
    if (!context.Products.Any())
    {
        context.Products.AddRange(
            new Product { 
                Name = "Apple iPhone 14", 
                Description = "Latest iPhone model with A15 Bionic chip and 5G support.", 
                Price = 999.99m, 
                Stock = 100 
            },
            new Product { 
                Name = "Apple MacBook Pro", 
                Description = "Powerful MacBook with Apple M1 chip for professional use.", 
                Price = 1999.99m, 
                Stock = 50 
            },
            new Product { 
                Name = "Apple iPad Air", 
                Description = "Lightweight iPad with A14 Bionic chip and 10.9-inch display.", 
                Price = 599.99m, 
                Stock = 200 
            },
            new Product { 
                Name = "Apple Watch Series 8", 
                Description = "Smartwatch with advanced health features and 18-hour battery life.", 
                Price = 399.99m, 
                Stock = 150 
            },
            new Product { 
                Name = "Apple AirPods Pro", 
                Description = "Wireless earbuds with active noise cancellation and spatial audio.", 
                Price = 249.99m, 
                Stock = 300 
            },
            new Product { 
                Name = "Apple iMac 24-inch", 
                Description = "All-in-one desktop with a 24-inch Retina 4.5K display and M1 chip.", 
                Price = 1299.99m, 
                Stock = 75 
            },
            new Product { 
                Name = "Apple Magic Keyboard", 
                Description = "Wireless keyboard with a sleek design and responsive keys.", 
                Price = 99.99m, 
                Stock = 500 
            },
            new Product { 
                Name = "Apple Magic Mouse", 
                Description = "Wireless mouse with a touch surface for gestures and navigation.", 
                Price = 79.99m, 
                Stock = 600 
            },
            new Product { 
                Name = "Apple HomePod Mini", 
                Description = "Compact smart speaker with high-fidelity audio and Siri support.", 
                Price = 99.99m, 
                Stock = 120 
            },
            new Product { 
                Name = "Apple TV 4K", 
                Description = "Streaming device with 4K resolution and Dolby Vision support.", 
                Price = 179.99m, 
                Stock = 80 
            },
            new Product { 
                Name = "Apple Pencil (2nd Gen)", 
                Description = "Stylus for iPad with magnetic charging and low latency.", 
                Price = 129.99m, 
                Stock = 200 
            },
            new Product { 
                Name = "Apple AirTag", 
                Description = "Item tracker that helps you locate lost items using the Find My network.", 
                Price = 29.99m, 
                Stock = 400 
            },
            new Product { 
                Name = "Apple Smart Folio for iPad", 
                Description = "Protective folio case for iPad with a lightweight, foldable design.", 
                Price = 99.99m, 
                Stock = 150 
            },
            new Product { 
                Name = "Apple Leather Case for iPhone", 
                Description = "Premium leather case for iPhone with a sleek, soft finish.", 
                Price = 129.99m, 
                Stock = 100 
            },
            new Product { 
                Name = "Apple MagSafe Charger", 
                Description = "Magnetic wireless charger for iPhone with fast charging capabilities.", 
                Price = 39.99m, 
                Stock = 300 
            }
        );

        context.SaveChanges();
    }
}
}}