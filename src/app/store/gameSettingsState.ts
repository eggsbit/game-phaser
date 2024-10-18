import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { GameSettingsInterface } from '../interfaces/GameSettingsInterface';

interface GameSettingsState {
    value: GameSettingsInterface
}

const initialState: GameSettingsState = {
    value: {
        player: '',
        game: ''
    },
}

export const gameSettingsSlice = createSlice({
    name: 'gameSettings',
    initialState,
    reducers: {
      setGameSettings: (state, action: PayloadAction<GameSettingsState>) => {
        state.value = action.payload.value;
      },
    },
});
  
export const { setGameSettings } = gameSettingsSlice.actions;

export const selectCount = (state: RootState) => state.gameSettings.value;

export default gameSettingsSlice.reducer;
