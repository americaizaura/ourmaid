defmodule Ourmaids.PressFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Ourmaids.Press` context.
  """

  @doc """
  Generate a release.
  """
  def release_fixture(attrs \\ %{}) do
    {:ok, release} =
      attrs
      |> Enum.into(%{
        content: "some content",
        date: "some date",
        title: "some title"
      })
      |> Ourmaids.Press.create_release()

    release
  end
end
