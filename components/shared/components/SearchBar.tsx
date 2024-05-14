import styled from "@emotion/styled";

const SearchInput = styled.input`
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 25px; // Rounded borders
  outline: none;
  width: 100%;
  max-width: 300px; // Limit the width of the input
  &:focus {
    border-color: #007bff; // Change border color on focus
  }
`;

export const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-xs rounded-full border border-gray-300 py-2 pl-10 pr-3 text-sm transition-colors focus:border-blue-500 focus:outline-none"
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
        <svg
          className="h-4 w-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};
