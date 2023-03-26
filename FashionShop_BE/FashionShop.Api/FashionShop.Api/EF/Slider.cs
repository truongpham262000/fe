﻿using System;
using System.Collections.Generic;

namespace FashionShop.Api.EF;

public partial class Slider
{
    public int SlideId { get; set; }

    public string? Image { get; set; }

    public string? Link { get; set; }

    public string? Description { get; set; }

    public DateTime? CreatedDate { get; set; }

    public string? CreatedBy { get; set; }

    public int? Status { get; set; }
}
