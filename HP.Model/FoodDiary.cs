using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HP.Model
{
    public class FoodDiary
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int FoodId { get; set; }
        public int Rating { get; set; }
        public int Servings { get; set; }
        //public DateTime LastModifiedDate { get; set; }
        //public DateTime CreationDate { get; set; }
    }
}