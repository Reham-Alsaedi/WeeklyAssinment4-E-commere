using System.ComponentModel.DataAnnotations;

namespace ProductService.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
         [Required]
        public decimal Price { get; set; }
         [Required]
        public int Stock { get; set; }
    }
}
