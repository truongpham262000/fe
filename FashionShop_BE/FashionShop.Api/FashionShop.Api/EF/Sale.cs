using System;
using System.Collections.Generic;

namespace FashionShop.Api.EF;

public partial class Sale
{
    public int SaleId { get; set; }

    public int? Promotion { get; set; }

    public string? Describe { get; set; }

    public int? Status { get; set; }

    public DateTime? StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public int? ProductId { get; set; }

    public virtual Product? Product { get; set; }
}
