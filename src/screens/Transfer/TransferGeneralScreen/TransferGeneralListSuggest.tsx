import React, { memo } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import ScrollMenu from "react-horizontal-scrolling-menu";

import { AppAvatar } from "components/AppAvatar";
import { AvatarModel } from "mock-data/home/movies";
import { recentContacts } from "screens/Transfer/TransferGeneralScreen/TransferData";

export interface ContactModel extends AvatarModel {
  id: string;
  phone: string;
}

interface Props {
  onChange: (id: string) => void;
  selectedId: string;
}

const TransferGeneralListSuggestDefault: React.FC<Props> = props => {
  const { onChange, selectedId } = props;

  const listCasts = generateListCasts(recentContacts, onChange, selectedId);

  return (
    <div className="max-w-2xl xxl:max-w-5xl lg:max-w-2xl">
      <p className="text__h3 color__steel font-medium mb-4">
        Suggestion accounts:
      </p>
      <ScrollMenu
        alignCenter={false}
        data={listCasts}
        arrowLeft={ArrowLeft()}
        arrowRight={ArrowRight()}
      />
    </div>
  );
};

export const TransferGeneralListSuggest = memo(
  TransferGeneralListSuggestDefault
);

const generateListCasts = (
  casts: ContactModel[],
  onChange: (id: string) => void,
  selectedId: string
) => {
  return casts.map((el, idx) => {
    const { name, src } = el;
    let className = "";

    if (selectedId !== "") {
      className = selectedId === el.id ? "" : "opacity-25";
    }
    const size = "3.75rem";

    return (
      <AppAvatar
        size={size}
        src={src}
        name={name}
        onClick={() => {
          onChange(el.id);
        }}
        className={className}
        hideName
        key={idx}
      />
    );
  });
};

const ArrowLeft = () => <ArrowBackIos />;
const ArrowRight = () => <ArrowForwardIos />;
