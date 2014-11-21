using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HP.Model
{
    public class Ingredient
    {
        public int Id { get; set; }
        public int RecipeId { get; set; }
        public int FoodId { get; set; }
    }
}