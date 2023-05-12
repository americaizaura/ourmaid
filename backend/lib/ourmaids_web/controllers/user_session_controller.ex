defmodule OurmaidsWeb.UserSessionController do
  use OurmaidsWeb, :controller

  alias Ourmaids.Accounts
  alias OurmaidsWeb.UserAuth

  def new(conn, _params) do
    render(conn, :new, error_message: nil)
  end

  def create(conn, %{"user" => user_params}) do
    %{"username" => username, "password" => password} = user_params

    if user = Accounts.get_user_by_username_and_password(username, password) do
      conn
      |> put_flash(:info, "You are now logged in, #{user.username}!")
      |> UserAuth.log_in_user(user, user_params)
    else
      # In order to prevent user enumeration attacks, don't disclose whether the username is registered.
      render(conn, :new,
        error_message:
          "It seems that you have entered an invalid username or password. Please try again."
      )
    end
  end

  def delete(conn, _params) do
    conn
    |> put_flash(:info, "See you soon!")
    |> UserAuth.log_out_user()
  end
end
