﻿using System;
using System.Collections.Generic;

namespace FashionShop.Api.EF;

public partial class Category
{
    public int CategoryId { get; set; }

    public string? Name { get; set; }

    public string? MetaTitle { get; set; }

    public string? SeoTitle { get; set; }

    public DateTime? CreatedDate { get; set; }

    public string? CreatedBy { get; set; }

    public string? MetaKeywords { get; set; }

    public string? MetaDescriptions { get; set; }

    public int? Status { get; set; }

    public virtual ICollection<Product> Products { get; } = new List<Product>();
}
