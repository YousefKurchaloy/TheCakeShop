using Microsoft.EntityFrameworkCore.Migrations;

namespace TheCakeShop.Data.Migrations
{
    public partial class PicUrl_in_Products : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "picUrl",
                table: "Products",
                newName: "PicUrl");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PicUrl",
                table: "Products",
                newName: "picUrl");
        }
    }
}
