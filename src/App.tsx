import { useEffect, useRef } from 'react';
import { IRefPhaserGame, PhaserGame } from './game/PhaserGame';
import { GameSettings } from './app/httpClient/client';
import { GameSettingsInterface } from './app/interfaces/GameSettingsInterface';

function App()
{
    const phaserRef = useRef<IRefPhaserGame | null>(null);

    useEffect(() => {


        GameSettings.getSettings().then(
            (data: GameSettingsInterface) => {
                console.log(data)
            }
        )
    });

    return (
        <div id="app">
            <PhaserGame ref={phaserRef} />
        </div>
    )
}

export default App
