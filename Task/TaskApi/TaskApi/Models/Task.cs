namespace TaskApi.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Task")]
    public partial class Task
    {
        public int id { get; set; }

        [StringLength(50)]
        public string name { get; set; }

        [StringLength(200)]
        public string description { get; set; }

        [StringLength(50)]
        public string assigneeName { get; set; }

        [Column(TypeName = "date")]
        public DateTime? date { get; set; }
    }
}
