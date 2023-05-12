defmodule OurmaidsWeb.ReleaseController do
  use OurmaidsWeb, :controller

  alias Ourmaids.Press
  alias Ourmaids.Press.Release

  def index(conn, _params) do
    releases = Press.list_releases()
    render(conn, :index, releases: releases)
  end

  def new(conn, _params) do
    changeset = Press.change_release(%Release{})
    render(conn, :new, changeset: changeset)
  end

  def releases(conn, _params) do
    releases = Press.list_releases()
    render(conn, "index.json", releases: releases)
  end

  def create(conn, %{"release" => release_params}) do
    case Press.create_release(release_params) do
      {:ok, release} ->
        conn
        |> put_flash(:info, "Release created successfully.")
        |> redirect(to: ~p"/#{release}")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :new, changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    release = Press.get_release!(id)
    render(conn, :show, release: release)
  end

  def edit(conn, %{"id" => id}) do
    release = Press.get_release!(id)
    changeset = Press.change_release(release)
    render(conn, :edit, release: release, changeset: changeset)
  end

  def update(conn, %{"id" => id, "release" => release_params}) do
    release = Press.get_release!(id)

    case Press.update_release(release, release_params) do
      {:ok, release} ->
        conn
        |> put_flash(:info, "Release updated successfully.")
        |> redirect(to: ~p"/#{release}")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :edit, release: release, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    release = Press.get_release!(id)
    {:ok, _release} = Press.delete_release(release)

    conn
    |> put_flash(:info, "Release deleted successfully.")
    |> redirect(to: ~p"/")
  end
end
