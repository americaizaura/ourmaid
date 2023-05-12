defmodule OurmaidsWeb.MailJSON do
  alias Ourmaids.ContactMail

  @doc """
  Renders a list of testers.
  """
  def index(%{mail: mails}) do
    %{data: for(mail <- mails, do: data(mail))}
  end

  @doc """
  Renders a single tester.
  """
  def show(%{response: response}) do
    %{response: response}
  end

  def response(%{response: response}) do
    %{response: response}
  end

  defp data(%ContactMail{} = mail) do
    %{
      name: mail.name,
      email: mail.email,
      phone: mail.phone,
      address: mail.address,
      postalCode: mail.postalCode,
      location: mail.location,
      referralSource: mail.referralSource,
      liquidCapital: mail.liquidCapital,
      message: mail.message
    }
  end
end
