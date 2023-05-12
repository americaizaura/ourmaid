defmodule Ourmaids.Repo do
  use Ecto.Repo,
    otp_app: :ourmaids,
    adapter: Ecto.Adapters.MyXQL
end
