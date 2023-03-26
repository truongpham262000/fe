﻿using System;
using System.Collections.Generic;

namespace FashionShop.Api.EF;

public partial class FeedBack
{
    public int FeedbackId { get; set; }

    public int? UserId { get; set; }

    public string? Name { get; set; }

    public string? Phone { get; set; }

    public string? Email { get; set; }

    public string? Address { get; set; }

    public string? Content { get; set; }

    public int? Status { get; set; }

    public DateTime? CreatedDate { get; set; }

    public virtual User? User { get; set; }
}
