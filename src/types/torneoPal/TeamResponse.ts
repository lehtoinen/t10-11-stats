type TeamResponse = {
  call: Call;
  team: Team;
};

type Call = {
  method: string;
  parameters: CallParameters;
  my_team: boolean;
  status: string;
  result_time: number;
  time_stamp: number;
};

type CallParameters = {
  team_id: string;
  competition_id: string;
  category_id: string;
};

type Team = {
  team_id: string;
  sport_id: string;
  team_name: string;
  team_officiality: string;
  club_id: string;
  club_name: string;
  club_abbrevation: string;
  club_city_id: string;
  club_city_name: string;
  contact_info: ContactInfo;
  crest: string;
  photo: string;
  age_group: string;
  birthyear: string;
  gender: string;
  gender_fi: string;
  home_venue_id: string;
  home_venue_name: string;
  www: string;
  team_www: string;
  club_www: string;
  kit_1_front: string;
  back_1_front: string;
  back_1_primary_color: string;
  back_1_pattern_color: string;
  contact_person: ContactPerson;
  primary_category: PrimaryCategory;
  players: Player[];
  officials: Official[];
  officials_jojo: OfficialsJojo[];
  categories: Category[];
  groups: Group[];
  suspensions: any[];
  sponsors: any[];
};

type ContactInfo = {
  contact_id: string;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  zipcode: string;
  city: string;
  phone: string;
};

type ContactPerson = {
  official_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};

type PrimaryCategory = {
  competition_id: string;
  category_id: string;
  competition_name: string;
  category_name: string;
  category_team_name: string;
  published: string;
};

type Player = {
  player_id: string;
  first_name: string;
  last_name: string;
  shirt_number: string;
  shirt_name: string;
  short_name: string;
  captain: string;
  position: string;
  position_fi: string;
  position_en: string;
  birthyear: string;
  height: string;
  weight: string;
  nationality: string;
  inactive: string;
  matches: string;
  periods: string;
  goals: string;
  assists: string;
  playing_time: string;
  shots_on_target: string;
  shots_off_target: string;
  shots_on_post: string;
  shots_total: string;
  fouls: string;
  free_kicks: string;
  corner_kicks: string;
  shots_saved: string;
  goals_against: string;
  points: string;
  dual_representation: string;
  overage: string;
  finland_raised: string;
  img_url: string;
};

type Official = {
  official_id: string;
  first_name: string;
  last_name: string;
  official_role: string;
  match_record: string;
  player_id: string;
};

type OfficialsJojo = {
  official_id: string;
  first_name: string;
  last_name: string;
  official_role: string;
  match_record: string;
  player_id: string;
};

type Category = {
  competition_id: string;
  competition_name: string;
  competition_logo: any;
  competition_season: string;
  competition_season_description: string;
  competition_status: string;
  competition_type: string;
  competition_officiality: string;
  season_start: string;
  season_end: string;
  organiser: string;
  organiser_private: string;
  category_id: string;
  category_name: string;
  category_logo: any;
  category_team_name: string;
};

type Group = {
  competition_id: string;
  competition_name: string;
  competition_logo: any;
  competition_season: string;
  competition_season_description: string;
  competition_status: string;
  competition_type: string;
  competition_officiality: string;
  group_type: string;
  category_id: string;
  category_name: string;
  category_team_name: string;
  organiser: string;
  organiser_private: string;
  group_id: string;
  group_name: string;
  group_current: string;
  playing_method: string;
};

export default TeamResponse;
