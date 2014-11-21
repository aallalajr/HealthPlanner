using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace HP.Model
{
    public class Food
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Rating { get; set; }
        //public int Rating { get { return LowSugar ? 1 : HighSugar ? 3 : 2; } }
        public int Calories { get; set; }
        public int Carbs { get; set; }
        public int Fat { get; set; }
        public int Protein { get; set; }
        public int Sodium { get; set; }
        public int Sugar { get; set; }
        public int TransFat { get; set; }
        [NotMapped]
        public bool LowSugar { get { return Sugar < 2; } }
        [NotMapped]
        public bool HighSugar { get { return Sugar > 8; } }
        [NotMapped]
        public bool HighCarbs { get { return Carbs > 16; } }
        [NotMapped]
        public bool LowCarbs { get { return Carbs > 10; } }
        [NotMapped]
        public bool HighSodium { get { return Sodium > 350; } }
        [NotMapped]
        public bool HighTransFat { get { return TransFat > 0; } }
        [NotMapped]
        public bool HighCalories { get { return Calories > 400; } }
    }
}