import { useDispatch, useSelector } from "react-redux";
import { onSwitchLanguage } from "../store/lngSlice";
import { useTranslation } from "react-i18next";

interface RootState {
  lng: {
    actualLng: string;
  };
}

export const useLngStore = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { actualLng } = useSelector((state: RootState) => state.lng);

  const switchLanguage = (lng: string) => {
    dispatch(onSwitchLanguage(lng));
    i18n.changeLanguage(lng);
  };

  return {
    actualLng,

    switchLanguage,
  };
};
