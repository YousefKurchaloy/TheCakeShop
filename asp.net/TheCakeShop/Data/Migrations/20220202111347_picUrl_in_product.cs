using Microsoft.EntityFrameworkCore.Migrations;

namespace TheCakeShop.Data.Migrations
{
    public partial class picUrl_in_product : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "picUrl",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "picUrl",
                table: "Products");
        }
    }
}
