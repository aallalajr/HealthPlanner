using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HP.Tasks
{
    public class RecipeVM
    {
        public string Name { get; set; }
        public int Calories { get; set; }
        public string URL { get; set; }
        public List<string> Ingredients { get; set; }
        public int PrepTime { get; set; }
        public string Directions { get; set; }
    }
}