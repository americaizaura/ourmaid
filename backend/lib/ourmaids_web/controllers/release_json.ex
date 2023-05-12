defmodule OurmaidsWeb.ReleaseJSON do
  alias Ourmaids.Press.Release

  @doc """
  Renders a list of testers.
  """
  def index(%{releases: releases}) do
    %{data: for(release <- releases, do: data(release))}
  end

  @doc """
  Renders a single tester.
  """
  def show(%{tester: tester}) do
    %{data: data(tester)}
  end

  defp data(%Release{} = release) do
    %{
      title: release.title,
      content: release.content,
      date: release.date
    }
  end
end
