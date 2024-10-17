import Button from "../../components/Button";
import Search from "./Search";

function Header({ onAscending, onDescending, onSearch }) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex">
                <Button onclick={() => onAscending()} className="btn-accent mr-3">
                    Ascending
                </Button>
                <Button onclick={() => onDescending()} className="btn-accent mr-3">
                    Descending
                </Button>
            </div>

            <Search onSearch={(props) => onSearch(props)} />
        </div>
    );
}

export default Header;