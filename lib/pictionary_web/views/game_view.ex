defmodule PictionaryWeb.GamesView do
  use PictionaryWeb, :view

  def render("show.json", %{game: game}) do
    %{
      id: game.id,
      rounds: game.rounds,
      time: game.time,
      max_players: game.max_players,
      custom_words: game.custom_words |> Enum.join(", "),
      custom_words_probability: game.custom_words_probability,
      public_game: game.public_game,
      vote_kick_enabled: game.vote_kick_enabled,
      players: render_many(game.players, PictionaryWeb.UserView, "show.json"),
      creator_id: game.creator_id
    }
  end
end
