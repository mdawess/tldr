export type Searchbar = {
    query: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type Logo = {
    normalText: string;
    colouredText: string;
    colour: string;
}

export type Mode = "standard" | "research-apa" | "research-mla";

export type ModeSelector = {
    setMode: (mode: Mode) => void;
}

export type TLDR = {
    title: string;
    author: string;
    date: string;
    tldr: string;
    url: string;
    saved: boolean;
    publication?: string;
    edition?: string;
}

export type Subject = {
    subjectId: string;
    subjectName: string;
    tldr: TLDR;
}

export type Profile = {
    id: number;
    name: string;
    email: string;
    signupDate: string;
    colour: string;
    profilePicture?: string;
}