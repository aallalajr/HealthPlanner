using HP.Model;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace HP
{
    public class HPDbContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public HPDbContext() : base(nameOrConnectionString: "HPDb") { }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            // Use singular table names
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            Database.SetInitializer<HPDbContext>(null);
        }

        public DbSet<FoodDiary> Meals { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<ExerciseDiary> ExerciseDiary { get; set; }
        public DbSet<Exercise> Exercises { get; set; }
        public DbSet<Food> Food { get; set; }
    }
}