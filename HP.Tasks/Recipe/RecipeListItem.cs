using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HP.Tasks
{
    public class RecipeListItem
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Calories { get; set; }
        public int CookTime { get; set; }
        public int Servings { get; set; }
        public string URL { get; set; }
        public int Rating { get; set; }
        //public List<IngredientListItem> Ingredients { get; set; }
    }
}