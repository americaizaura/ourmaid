defmodule Ourmaids.Repo.Migrations.CreateReleases do
  use Ecto.Migration

  def change do
    create table(:releases) do
      add :title, :string
      add :content, :text
      add :date, :string

      timestamps()
    end
  end
end
