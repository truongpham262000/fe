﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FashionShop.Api.EF;

namespace FashionShop.Api.Controllers
{
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    [ApiVersion("1.0")]
    public class SalesController : ControllerBase
    {
        private readonly FashionShopDbContext _context;

        public SalesController(FashionShopDbContext context)
        {
            _context = context;
        }

        // GET: api/Sales
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sale>>> GetSales()
        {
          if (_context.Sales == null)
          {
              return NotFound();
          }
            return await _context.Sales.ToListAsync();
        }

        // GET: api/Sales/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Sale>> GetSale(int id)
        {
          if (_context.Sales == null)
          {
              return NotFound();
          }
            var sale = await _context.Sales.FindAsync(id);

            if (sale == null)
            {
                return NotFound();
            }

            return sale;
        }

        // PUT: api/Sales/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSale(int id, Sale sale)
        {
            if (id != sale.SaleId)
            {
                return BadRequest();
            }

            _context.Entry(sale).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SaleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Sales
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Sale>> PostSale(Sale sale)
        {
          if (_context.Sales == null)
          {
              return Problem("Entity set 'FashionShopDbContext.Sales'  is null.");
          }
            _context.Sales.Add(sale);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSale", new { id = sale.SaleId }, sale);
        }

        // DELETE: api/Sales/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSale(int id)
        {
            if (_context.Sales == null)
            {
                return NotFound();
            }
            var sale = await _context.Sales.FindAsync(id);
            if (sale == null)
            {
                return NotFound();
            }

            _context.Sales.Remove(sale);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SaleExists(int id)
        {
            return (_context.Sales?.Any(e => e.SaleId == id)).GetValueOrDefault();
        }
    }
}
