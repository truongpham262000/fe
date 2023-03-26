using System;
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
    public class SizeProductsController : ControllerBase
    {
        private readonly FashionShopDbContext _context;

        public SizeProductsController(FashionShopDbContext context)
        {
            _context = context;
        }

        // GET: api/SizeProducts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SizeProduct>>> GetSizeProducts()
        {
          if (_context.SizeProducts == null)
          {
              return NotFound();
          }
            return await _context.SizeProducts.ToListAsync();
        }

        // GET: api/SizeProducts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SizeProduct>> GetSizeProduct(int id)
        {
          if (_context.SizeProducts == null)
          {
              return NotFound();
          }
            var sizeProduct = await _context.SizeProducts.FindAsync(id);

            if (sizeProduct == null)
            {
                return NotFound();
            }

            return sizeProduct;
        }

        // PUT: api/SizeProducts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSizeProduct(int id, SizeProduct sizeProduct)
        {
            if (id != sizeProduct.SizeId)
            {
                return BadRequest();
            }

            _context.Entry(sizeProduct).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SizeProductExists(id))
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

        // POST: api/SizeProducts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SizeProduct>> PostSizeProduct(SizeProduct sizeProduct)
        {
          if (_context.SizeProducts == null)
          {
              return Problem("Entity set 'FashionShopDbContext.SizeProducts'  is null.");
          }
            _context.SizeProducts.Add(sizeProduct);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSizeProduct", new { id = sizeProduct.SizeId }, sizeProduct);
        }

        // DELETE: api/SizeProducts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSizeProduct(int id)
        {
            if (_context.SizeProducts == null)
            {
                return NotFound();
            }
            var sizeProduct = await _context.SizeProducts.FindAsync(id);
            if (sizeProduct == null)
            {
                return NotFound();
            }

            _context.SizeProducts.Remove(sizeProduct);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SizeProductExists(int id)
        {
            return (_context.SizeProducts?.Any(e => e.SizeId == id)).GetValueOrDefault();
        }
    }
}
