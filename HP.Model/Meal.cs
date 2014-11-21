using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HP.Model
{
    public class Meal
    {
        public int Id { get; set; }
        public string MealType { get; set; }
        public int Servings { get; set; }
        public int Rating { get; set; }
        public int FoodId { get; set; }
    }
}
