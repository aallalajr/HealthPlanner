using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace HP.Model
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Calories { get; set; }
        public int Servings { get; set; }
        public string Url { get; set; }

        /// <summary>Get and set the recipes's nutrition rating from 1-3 (0=not rated).</summary>
        [Range(0, 3)]
        public int Rating { get; set; }
        public string ImageSource { get; set; }
    }
}