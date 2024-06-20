export type LoginData = {
    id:                string;
    email:             string;
    username:          string;
    provider:          string;
    avatarUrl:         null;
    firstName:         string;
    lastName:          string;
    hasProfilePicture: boolean;
    confirmedAt:       Date;
    createdAt:         Date;
    updatedAt:         Date;
    status:            number;
    timezone:          number;
    timezoneId:        null;
    language:          null;
    areaCodes:         AreaCode[];
    authorities:       Authority[];
    token:             null;
}

export type AreaCode = {
    id:     string;
    code:   string;
    status: number;
}

export type Authority = {
    authority: string;
}
