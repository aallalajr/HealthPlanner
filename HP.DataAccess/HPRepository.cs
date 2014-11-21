using System.Linq;
using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using Newtonsoft.Json.Linq;
using HP.Model;

namespace HP.DataAccess
{
    /// <summary>
    /// Repository (a "Unit of Work" really) of models.
    /// </summary>
    public class HPRepository
    {
        private readonly EFContextProvider<HPDbContext>
            _contextProvider = new EFContextProvider<HPDbContext>();

        private HPDbContext Context { get { return _contextProvider.Context; } }

        public string Metadata
        {
            get { return _contextProvider.Metadata(); }
        }

        public SaveResult SaveChanges(JObject saveBundle)
        {
            return _contextProvider.SaveChanges(saveBundle);
        }
        public IQueryable<Recipe> Recipes
        {
            get { return Context.Recipes; }
        }
        public IQueryable<Ingredient> Ingredients
        {
            get { return Context.Ingredients; }
        }
        public IQueryable<Food> Food
        {
            get { return Context.Food; }
        }
        public IQueryable<FoodDiary> Meals
        {
            get { return Context.Meals; }
        }
        public IQueryable<ExerciseDiary> ExerciseDiary
        {
            get { return Context.ExerciseDiary; }
        }
        public IQueryable<Exercise> Exercise
        {
            get { return Context.Exercises; }
        }
    }
}