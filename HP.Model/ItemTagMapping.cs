using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HP.Model
{
    public class ItemTagMapping
    {
        public int Id { get; set; }
        public int ItemId { get; set; }
        public string ItemType { get; set; }
        public int TagId { get; set; }
    }
}