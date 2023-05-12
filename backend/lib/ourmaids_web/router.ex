defmodule OurmaidsWeb.Router do
  use OurmaidsWeb, :router

  import OurmaidsWeb.UserAuth

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_live_flash)
    plug(:put_root_layout, {OurmaidsWeb.Layouts, :root})
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
    plug(:fetch_current_user)
  end

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/", OurmaidsWeb do
    pipe_through(:browser)
  end

  scope "/api", OurmaidsWeb do
    pipe_through(:api)

    post("/mail", MailController, :create)
    get("/mail", MailController, :show)
    get("/releases", ReleaseController, :releases)
  end

  # Other scopes may use custom stacks.
  # scope "/api", OurmaidsWeb do
  #   pipe_through :api
  # end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:ourmaids, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through(:browser)

      live_dashboard("/dashboard", metrics: OurmaidsWeb.Telemetry)
      forward("/mailbox", Plug.Swoosh.MailboxPreview)
    end
  end

  ## Authentication routes

  scope "/", OurmaidsWeb do
    pipe_through([:browser, :redirect_if_user_is_authenticated])

    # get("/users/register", UserRegistrationController, :new)
    # post("/users/register", UserRegistrationController, :create)
    get("/users/log_in", UserSessionController, :new)
    post("/users/log_in", UserSessionController, :create)
  end

  scope "/", OurmaidsWeb do
    pipe_through([:browser, :require_authenticated_user])

    resources("/", ReleaseController)
  end

  scope "/", OurmaidsWeb do
    pipe_through([:browser])

    delete("/users/log_out", UserSessionController, :delete)
  end
end
