using FashionShop.Api.EF;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.Mvc.Versioning;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<FashionShopDbContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("FashionShop"));
});

builder.Services.AddCors(option =>
{
    option.AddPolicy("ConnectFashionShop", policy =>
    {
        policy.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
    });
});

builder.Services.AddApiVersioning(otp =>
{
    otp.DefaultApiVersion = new Microsoft.AspNetCore.Mvc.ApiVersion(1, 0);
    otp.AssumeDefaultVersionWhenUnspecified = true;
    otp.ReportApiVersions = true;
    otp.ApiVersionReader = ApiVersionReader.Combine(
                                                        new UrlSegmentApiVersionReader(),
                                                        new HeaderApiVersionReader("x-api-version"),
                                                        new MediaTypeApiVersionReader("x-api-version")
                                                   );
});

builder.Services.AddVersionedApiExplorer(setup =>
{
    setup.GroupNameFormat = "'v'VVV";
    setup.SubstituteApiVersionInUrl = true;
});

var app = builder.Build();

var apiVersionDescriptionProvider = app.Services.GetRequiredService<IApiVersionDescriptionProvider>();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        foreach (var description in apiVersionDescriptionProvider.ApiVersionDescriptions)
        {
            options.SwaggerEndpoint($"/swagger/{description.GroupName}/swagger.json",
                description.GroupName.ToUpperInvariant());
        }
    });
}

app.UseCors("ConnectFashionShop");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
