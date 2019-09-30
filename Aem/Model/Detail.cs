using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Aem.Model
{
    public class Detail
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName="nvarchar(60)")]
        public string PlatformName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(20)")]
        public string PlatformId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(60)")]
        public string UniqueName { get; set; }
        [Required]        
        public string UpdatedAt { get; set; }
        [Required]
        public String CreatedAt { get; set; }

    }
}
