import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react"
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  const [selectedGenre, setselectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show when={showAside}>
        <GridItem area='aside' paddingX={5}>
          <GenreList onSelectGenre={(genre) => setselectedGenre(genre)} selectedGenre={selectedGenre} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector onSelectPlatform={(platform) => setselectedPlatform(platform)} selectedPlatform={selectedPlatform} />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  )
}

export default App