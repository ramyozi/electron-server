import React from "react";
import {FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight} from "react-icons/fa";

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px 0'
        },
        link: {
            margin: '0 5px',
            color: '#007bff',
            textDecoration: 'none',
            cursor: 'pointer',
        },
        linkDisabled: {
            margin: '0 5px',
            color: '#ccc',
            cursor: 'not-allowed'
        }
    };

    return (
        <div style={styles.container}>
            <a
                href="#"
                onClick={(e) => { e.preventDefault(); onPageChange(1); }}
                style={currentPage === 1 ? styles.linkDisabled : styles.link}
            >
                <FaAngleDoubleLeft />
            </a>
            <a
                href="#"
                onClick={(e) => { e.preventDefault(); onPageChange(currentPage - 1); }}
                style={currentPage === 1 ? styles.linkDisabled : styles.link}
            >
                <FaAngleLeft />
            </a>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <a
                    key={page}
                    href="#"
                    onClick={(e) => { e.preventDefault(); onPageChange(page); }}
                    style={currentPage === page ? styles.linkDisabled : styles.link}
                >
                    {page}
                </a>
            ))}
            <a
                href="#"
                onClick={(e) => { e.preventDefault(); onPageChange(currentPage + 1); }}
                style={currentPage === totalPages ? styles.linkDisabled : styles.link}
            >
                <FaAngleRight />
            </a>
            <a
                href="#"
                onClick={(e) => { e.preventDefault(); onPageChange(totalPages); }}
                style={currentPage === totalPages ? styles.linkDisabled : styles.link}
            >
                <FaAngleDoubleRight />
            </a>
        </div>

    );
};

export default PaginationControls;
