using Microsoft.EntityFrameworkCore.Migrations;

namespace TheCakeShop.Data.Migrations
{
    public partial class SpellingMistake : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsVegen",
                table: "Ingredients",
                newName: "IsVegan");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsVegan",
                table: "Ingredients",
                newName: "IsVegen");
        }
    }
}
