using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aem.Model
{
    public class Main:DbContext
    {
        public Main(DbContextOptions<Main> options) : base(options)
        {

        }

        public DbSet<Detail> Details { get; set; }
    }
}
